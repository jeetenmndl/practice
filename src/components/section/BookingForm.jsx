'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import postBooking from '@/lib/actions/postBooking'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'

export default function BookingForm({bookings}) {

  const {toast} = useToast();

  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

  const doctors = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      specialization: "Psychiatrist",
      image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
      fees: 1000,
      info: "I am a psychiatrist, a medical doctor who specializes in understanding and treating mental health conditions. I work with individuals to diagnose their challenges, provide therapy, and prescribe medication if needed to help them live healthier lives."
    },
    {
      id: 2,
      name: "Dr. Emily Brown",
      specialization: "Counsellor",
      image: "https://media.istockphoto.com/id/497142181/photo/physician.jpg?s=612x612&w=0&k=20&c=PX_lRXXQo7lUpE1Slj2vHsiCnZZnVNF_OX99-ag6O_8=",
      fees: 1500,
      info: "I am a counselor, here to provide support and guidance as you navigate personal or emotional challenges. My role is to create a safe and understanding space where you can express yourself and find effective ways to cope."
    },
    {
      id: 3,
      name: "Dr. John Doe",
      specialization: "Life Coach",
      image: "https://media.istockphoto.com/id/1340883379/photo/young-doctor-hospital-medical-medicine-health-care-clinic-office-portrait-glasses-man.jpg?s=612x612&w=0&k=20&c=_H4VUPBkS0gEj5ZdZzQo-Hw3lMuyofJpB-P9yS92Wyw=",
      fees: 1000,
      info: "I am a life coach, dedicated to helping you set and achieve your personal or professional goals. Together, we’ll work on building your confidence, refining your decisions, and creating a path to a more fulfilling life."
    }
  ];
  

  const handleBooking = async () => {
    if(selectedTime == '' || selectedDoctor == null){
      toast({
        title: "OOPS!",
        description: "Please select time and doctor.",
        variant: "destructive"
      })
    }
    else{
      
    const data = {
      bookingDate: selectedDate.toISOString(),
      bookingTime: selectedTime,
      doctorID: selectedDoctor.toString()
    }
    const response = await postBooking(data);
console.log(response)

    if(response.success){
      toast({
        title: "Congratulations!",
        description: "Session booked.",
      })
    }
    else{
      toast({
        title: "OOPS!",
        description: response.message,
        variant: "destructive"
      })
    }
  }
  }



  return (
    <div className="w-2/3 mt-8 flex mx-auto justify-center gap-4">

      <Card className="p-4">
        <div>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
        />
        </div>

        {/* <div> */}
        <Select onValueChange={(value) => setSelectedTime(value)}>
          <SelectTrigger className="w-full mt-4">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            {availableTimes.map((time) => (
              <SelectItem key={time} value={time}>{time}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setSelectedDoctor(Number(value))}>
          <SelectTrigger className="w-full mt-4">
            <SelectValue placeholder="Select doctor" />
          </SelectTrigger>
          <SelectContent>
            {doctors.map((doctor) => (
              <SelectItem key={doctor.id} value={doctor.id.toString()}>{doctor.name} - {doctor.specialization}</SelectItem>
            ))}
          </SelectContent>
        </Select>

            <Button onClick={handleBooking} className="mt-4 w-full bg-main hover:bg-purple-600">Confirm Booking</Button>

        {/* </div> */}
      </Card>

{/* doctor info  */}
      <div className=''>
        {selectedDoctor? (
          <Card>
            <CardContent className="grid grid-cols-2 gap-4 pt-6">
              <div>
              <Image
                src={doctors[selectedDoctor - 1].image}
                alt={doctors[selectedDoctor - 1].name}
                width={400}
                height={100}
                className="rounded-lg w-full shadow-md"
              />
              </div>

              <div>
              <h2 className='text-lg font-semibold mt-4'>{doctors[selectedDoctor - 1].name}</h2>
              <p><strong>Specialization:</strong> {doctors[selectedDoctor - 1].specialization}</p>
              <p><strong>Fees:</strong> ${doctors[selectedDoctor - 1].fees}</p>
              <p className='mt-4'><strong>Info:</strong> {doctors[selectedDoctor - 1].info}</p>
              </div>
            </CardContent>
          </Card>
        )
      :
      <Card>
        <CardHeader>
          <CardTitle>
            Your Bookings
          </CardTitle>
          <CardDescription>
            See the bookings that you made earlier.
          </CardDescription>
        </CardHeader>
        <CardContent className="flec flex-col gap-4">

        {
          bookings.length==0?
          <p>
            No bookings.
          </p>:
          bookings.map((item)=>{
            return(
              <div key={item.id} className='border rounded-md p-4 shadow'>
                <p className='text-md'>{doctors[parseInt(item.doctorID) - 1].name}</p>
                <p className='text-sm text-gray-500 mb-4 '>{item.bookingDate} • {item.bookingTime} </p>
                <p className='text-sm text-gray-500 mb-4 '>{doctors[parseInt(item.doctorID) - 1].specialization} </p>

                <Link href={"/therapy/session/"+item.uuID} >
                  <Button size="sm" className="w-full">Join Session</Button>
                </Link>  
              </div>

              )
            })
        }

        </CardContent>
        <CardFooter>
        <Link href={"/therapy/session/emergency"} >
          <Button variant="ghost" className="border border-red-500 text-red-500" >Emergency Booking</Button>
        </Link>
        </CardFooter>
      </Card>
      
      
      }
      </div>
     
    </div>
  )
}


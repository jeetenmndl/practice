'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function BookingForm() {
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
      image: "https://media.istockphoto.com/id/1425798958/photo/photo-of-confident-female-doctor-in-hospital-looking-at-camera-with-smile.jpg?s=612x612&w=0&k=20&c=i91idG544pXuYkw5ju6iIzm1m-lEqQaygeOOrjG5GEk=",
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
  

  const handleBooking = () => {
    // Handle booking logic here
    console.log('Booking confirmed')
  }



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <div>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
        />
        </div>

        <div>
        <Select onValueChange={(value) => setSelectedTime(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            {availableTimes.map((time) => (
              <SelectItem key={time} value={time}>{time}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setSelectedDoctor(Number(value))}>
          <SelectTrigger className="w-full mt-6">
            <SelectValue placeholder="Select doctor" />
          </SelectTrigger>
          <SelectContent>
            {doctors.map((doctor) => (
              <SelectItem key={doctor.id} value={doctor.id.toString()}>{doctor.name} - {doctor.specialization}</SelectItem>
            ))}
          </SelectContent>
        </Select>

 <div className="md:col-span-2 mt-6">
        <h2 className="text-xl font-semibold mb-2">Available Bookings</h2>
        <ul className="space-y-2">
          {/* Mock available bookings */}
          <li>09:00 - 10:00</li>
          <li>11:00 - 12:00</li>
          <li>14:00 - 15:00</li>
        </ul>
            <Button className="mt-4 w-full">Join Booking</Button>
      </div>
        </div>
      </div>

{/* doctor info  */}
      <div className='pl-60'>
        {selectedDoctor && (
          <Card>
            <CardContent className="pt-6">
              <Image
                src={doctors[selectedDoctor - 1].image}
                alt={doctors[selectedDoctor - 1].name}
                width={400}
                height={100}
                className="rounded-lg w-full shadow-md"
              />
              <h2 className='text-lg font-semibold mt-4'>{doctors[selectedDoctor - 1].name}</h2>
              <p><strong>Specialization:</strong> {doctors[selectedDoctor - 1].specialization}</p>
              <p><strong>Fees:</strong> ${doctors[selectedDoctor - 1].fees}</p>
              <p className='mt-4'><strong>Info:</strong> {doctors[selectedDoctor - 1].info}</p>
            </CardContent>
          </Card>
        )}
      </div>
     
    </div>
  )
}


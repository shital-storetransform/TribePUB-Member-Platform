import { useState } from 'react'
import { ChevronLeft, ChevronRight, Monitor, Info, CreditCard, ChevronDown } from 'lucide-react';
import Tribepub from "../Assets/image 1.png";
import icon from "../Assets/image 11.png";

export default function ScheduleConsultation() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedTimeZone, setSelectedTimeZone] = useState("US Standard time (01:15pm)")
  
  // Available dates (shown in amber)
  const availableDates = [12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28, 31]
  
  // Days of the week
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  
  // Get current date and month
  const currentDate = new Date()
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())  // Track current month (0-based index)
  const currentYear = currentDate.getFullYear()

  // Get the days of the month for the selected month
  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month + 1, 0)
    return Array.from({ length: date.getDate() }, (_, i) => i + 1)
  }

  // Get the start day of the month (which day of the week the 1st falls on)
  const getFirstDayOfMonth = (month, year) => {
    const date = new Date(year, month, 1)
    return date.getDay() // 0 (Sunday) to 6 (Saturday)
  }

  // Timezones list
  const timeZones = [
    "US Standard time (01:15pm)",
    "US Eastern Time (02:15pm)",
    "US Central Time (03:15pm)",
    "US Mountain Time (04:15pm)",
    "US Pacific Time (05:15pm)"
  ]

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const handleSelectTimeZone = (zone) => {
    setSelectedTimeZone(zone)
    setIsDropdownOpen(false)
  }

  const handlePreviousMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1170px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Schedule a Consultation
        </h2>
        <p className="text-center text-gray-600 mb-12">
          A Platform Unified Business ("PUB") is an online business that has its core.
        </p>

        <div className="max-w-4xl mx-auto border rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2">
            {/* Left Panel */}
            <div className="border-r">
              <div className="border-b p-6">
                <img
                  src={Tribepub}
                  alt="TribePUB"
                  width={200}
                  height={50}
                  className="mb-4"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={icon}
                    alt="TribePUB Icon"
                    width={48}
                    height={48}
                  />
                  <h3 className="text-xl font-semibold">
                    20 Minutes Consultation
                  </h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4" />
                    <span>20 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    <span>Web conferencing details provided upon confirmation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <span>$0.00 USD</span>
                  </div>
                </div>

                <button className="text-red-800 text-sm mt-8">
                  Cookie Settings
                </button>
              </div>
            </div>

            {/* Right Panel */}
            <div>
              <div className="border-b p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">
                    Schedule a Date & Time
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <button onClick={handlePreviousMonth} className="text-gray-600 hover:text-black">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="font-medium">
                    {`${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`}
                  </span>
                  <button onClick={handleNextMonth} className="text-gray-600 hover:text-black">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {days.map((day) => (
                    <div 
                      key={day}
                      className={`text-xs font-medium ${
                        ['SAT', 'SUN'].includes(day) ? 'text-amber-500' : 'text-gray-500'
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for alignment */}
                  {Array(getFirstDayOfMonth(currentMonth, currentYear)).fill(null).map((_, index) => (
                    <div key={`empty-${index}`} className="aspect-square" />
                  ))}
                  {getDaysInMonth(currentMonth, currentYear).map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`
                        aspect-square rounded-full flex items-center justify-center text-sm
                        ${availableDates.includes(date) 
                          ? 'hover:bg-amber-100 text-gray-900' 
                          : 'text-gray-400 cursor-not-allowed'}`}
                      disabled={!availableDates.includes(date)}
                    >
                      {date}
                    </button>
                  ))}
                </div>

                {/* Time Zone Dropdown */}
                <div className="mt-8">
                  <h4 className="text-sm font-medium mb-2">Time Zone</h4>
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="w-full text-left flex items-center justify-between border py-2 px-4 rounded-md"
                    >
                      <span>{selectedTimeZone}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-lg">
                        {timeZones.map((zone) => (
                          <button
                            key={zone}
                            onClick={() => handleSelectTimeZone(zone)}
                            className="w-full text-left py-2 px-4 hover:bg-gray-100"
                          >
                            {zone}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

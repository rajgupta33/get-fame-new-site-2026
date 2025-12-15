import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const BookingCalendar = ({ selectedDate, onDateSelect, selectedTime, onTimeSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState([]);

    // Mock available time slots
    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
    ];

    useEffect(() => {
        // Mock available slots based on selected date
        if (selectedDate) {
            const dayOfWeek = selectedDate?.getDay();
            // Weekend has fewer slots
            const slots = dayOfWeek === 0 || dayOfWeek === 6
                ? timeSlots?.slice(0, 3)
                : timeSlots;
            setAvailableSlots(slots);
        }
    }, [selectedDate]);

    const getDaysInMonth = (date) => {
        const year = date?.getFullYear();
        const month = date?.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay?.getDate();
        const startingDayOfWeek = firstDay?.getDay();

        const days = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            days?.push(null);
        }

        // Add all days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days?.push(new Date(year, month, day));
        }

        return days;
    };

    const isDateAvailable = (date) => {
        if (!date) return false;
        const today = new Date();
        today?.setHours(0, 0, 0, 0);
        return date >= today && date?.getDay() !== 0; // No Sundays
    };

    const isDateSelected = (date) => {
        if (!date || !selectedDate) return false;
        return date?.toDateString() === selectedDate?.toDateString();
    };

    const navigateMonth = (direction) => {
        const newMonth = new Date(currentMonth);
        newMonth?.setMonth(currentMonth?.getMonth() + direction);
        setCurrentMonth(newMonth);
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="bg-surface rounded-xl p-6 shadow-card border border-border">
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Select Date & Time</h3>
                <p className="text-sm text-muted-foreground">Choose your preferred consultation slot</p>
            </div>
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
                <Button
                    variant="ghost"
                    size="sm"
                    iconName="ChevronLeft"
                    iconPosition="left"
                    onClick={() => navigateMonth(-1)}
                    className="text-muted-foreground hover:text-foreground"
                >
                    Previous
                </Button>

                <h4 className="text-lg font-semibold text-foreground">
                    {monthNames?.[currentMonth?.getMonth()]} {currentMonth?.getFullYear()}
                </h4>

                <Button
                    variant="ghost"
                    size="sm"
                    iconName="ChevronRight"
                    iconPosition="right"
                    onClick={() => navigateMonth(1)}
                    className="text-muted-foreground hover:text-foreground"
                >
                    Next
                </Button>
            </div>
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-6">
                {/* Day headers */}
                {dayNames?.map(day => (
                    <div key={day} className="p-2 text-center text-xs font-medium text-muted-foreground">
                        {day}
                    </div>
                ))}

                {/* Calendar days */}
                {getDaysInMonth(currentMonth)?.map((date, index) => (
                    <button
                        key={index}
                        onClick={() => date && isDateAvailable(date) && onDateSelect(date)}
                        disabled={!date || !isDateAvailable(date)}
                        className={`
              p-2 text-sm rounded-lg transition-all duration-200 h-10 w-full
              ${!date ? 'invisible' : ''}
              ${!isDateAvailable(date) ? 'text-muted-foreground cursor-not-allowed' : ''}
              ${isDateAvailable(date) && !isDateSelected(date) ? 'text-foreground hover:bg-primary/10 hover:text-primary cursor-pointer' : ''}
              ${isDateSelected(date) ? 'bg-primary text-primary-foreground font-semibold' : ''}
            `}
                    >
                        {date?.getDate()}
                    </button>
                ))}
            </div>
            {/* Time Slots */}
            {selectedDate && (
                <div className="border-t border-border pt-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Available Times</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {availableSlots?.map(time => (
                            <button
                                key={time}
                                onClick={() => onTimeSelect(time)}
                                className={`
                  p-3 text-sm rounded-lg border transition-all duration-200
                  ${selectedTime === time
                                        ? 'bg-primary text-primary-foreground border-primary'
                                        : 'bg-background text-foreground border-border hover:border-primary hover:bg-primary/5'
                                    }
                `}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {/* Timezone Info */}
            <div className="mt-4 p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>Times shown in your local timezone (EST)</span>
                </div>
            </div>
        </div>
    );
};

export default BookingCalendar;
export const formatDate = (dateString: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',   
        day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

// Helper function to convert month name to number
const monthNameToNumber = (monthName: string) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    return monthNames.indexOf(monthName) + 1; 
};

// Function to handle custom date strings like "January 6, 1982"
export const getDaysAgo = (dateString: string) => {
    let purchaseDate = new Date(dateString);

    // Check if the date is valid
    if (isNaN(purchaseDate.getTime())) {
        // If the direct parsing failed, try to convert manually
        // Split the date string into parts
        const parts = dateString.split(' ');
        if (parts.length === 3) {
            const [monthName, dayWithComma, year] = parts;
            const monthNumber = monthNameToNumber(monthName);
            const day = dayWithComma.replace(',', '');
            // Check if the parts are valid numbers
            if (monthNumber && !isNaN(parseInt(day)) && !isNaN(parseInt(year))) {
                const formattedDateString = `${year}-${String(monthNumber).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                console.log('Formatted dateString:', formattedDateString);
                purchaseDate = new Date(formattedDateString);
            } else {
                console.error('Invalid date parts:', parts);
                return NaN; 
            }
        } else {
            console.error('Invalid date format:', dateString);
            return NaN;
        }
    }

    // Check if the purchaseDate is still invalid after formatting
    if (isNaN(purchaseDate.getTime())) {
        console.error('Invalid parsed date:', purchaseDate);
        return NaN;
    }

    const today = new Date();
    const differenceInTime = today.getTime() - purchaseDate.getTime();

    // Convert from milliseconds to days
    const daysAgo = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return daysAgo;
};

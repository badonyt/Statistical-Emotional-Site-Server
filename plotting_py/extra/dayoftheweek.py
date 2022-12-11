from datetime import date
import calendar
def get_week_day(day, month, year):

    # Create a date object
    d = date(year, month, day)

    # Get the day of the week (0 = Monday, 1 = Tuesday, etc.)
    return d.weekday()

def week_number(day, month, year):



    # Create a date object
    d = date(int(year), int(month), int(day))

    # Get the year, week number, and day of the week as a tuple
    year, week_number, day_of_week = d.isocalendar()


    return week_number

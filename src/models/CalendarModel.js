import {makeAutoObservable} from "mobx";
import {
    DayView,
    MonthView,
    WeekView} from "@devexpress/dx-react-scheduler-material-ui";

import {events} from '../mock/events'

const defaultViewProps = {
    startDayHour: 0,
    endDayHour: 24,
    cellDuration: 60
}

class CalendarModel {
    data = []

    view = {
        current: "week",
        day: () => <DayView {...defaultViewProps}/>,
        week: () => <WeekView {...defaultViewProps}/>,
        month: () => <MonthView {...defaultViewProps}/>,
    }

    constructor() {
        makeAutoObservable(this, {},{deep:true})
        this.setData(events)
    }

    setData(data) {
        this.data = data
    }

    setDayView() {
        this.view.current = "day"
    }

    setWeekView() {
        this.view.current = "week"
    }

    setMonthView() {
        this.view.current = "month"
    }

    addEvent(event) {
        const newEvent = Object.assign({id: new Date().getTime()}, event)
        this.data = [...this.data, newEvent]
    }

    changeEvent(changed) {
        this.data = this.data.map(event => (
            changed[event.id] ? {...event, ...changed[event.id]} : event))
    }

    deleteEvent(id) {
        this.data = this.data.filter(e => e.id !== id)
    }

    get getCurrentView() {
        return this.view[this.view.current]()
    }
}

export default new CalendarModel()

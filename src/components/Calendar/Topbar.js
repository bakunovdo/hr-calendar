import React from 'react';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {observer} from "mobx-react-lite";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#e7e7e7"
    }
}));

export const Topbar = observer(({CalendarModel}) => {
    const classes = useStyles();

    const btnDay = CalendarModel.view.current === "day" ? classes.root : ""
    const btnWeek = CalendarModel.view.current === "week" ? classes.root : ""
    const btnMonth = CalendarModel.view.current === "month" ? classes.root : ""

    return (
        <ButtonGroup color="primary">
            <Button className={btnDay}
                    onClick={() => CalendarModel.setDayView()}>
                Day
            </Button>
            <Button className={btnWeek}
                    onClick={() => CalendarModel.setWeekView()}>
                Week
            </Button>
            <Button className={btnMonth}
                    onClick={() => CalendarModel.setMonthView()}>
                Month
            </Button>
        </ButtonGroup>
    );
});



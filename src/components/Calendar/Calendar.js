import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {EditingState, IntegratedEditing, ViewState} from '@devexpress/dx-react-scheduler';
import {
    AppointmentForm,
    Appointments,
    AppointmentTooltip,
    ConfirmationDialog,
    DateNavigator,
    Scheduler,
    TodayButton,
    Toolbar,
} from '@devexpress/dx-react-scheduler-material-ui';

import makeStyles from "@material-ui/core/styles/makeStyles";
import {observer} from "mobx-react-lite";

import {Topbar} from "./Topbar";
import {useCallback} from "react";


const useStyles = makeStyles((theme) => ({
    paper: {
        overflow: 'auto'
    }
}));

export const Calendar = observer(({CalendarModel}) => {
    const classes = useStyles()

    const commitChanges = ({added, changed, deleted}) => {
        if (added) CalendarModel.addEvent(added)
        if (changed) CalendarModel.changeEvent(changed)
        if (deleted) CalendarModel.deleteEvent(deleted)
    }

    const ToolbarAddition = useCallback(() => (
        <Toolbar.FlexibleSpace>
            <Topbar CalendarModel={CalendarModel}/>
        </Toolbar.FlexibleSpace>
    ), [])

    const dateNow = new Date().getTime()

    return (
        <Paper className={classes.paper}>
            <Scheduler data={CalendarModel.data}>
                <ViewState defaultCurrentDate={dateNow}/>
                <EditingState onCommitChanges={commitChanges}/>
                <IntegratedEditing/>
                <Toolbar flexibleSpaceComponent={ToolbarAddition}/>
                <DateNavigator/>
                <TodayButton/>

                {CalendarModel.getCurrentView}

                <ConfirmationDialog/>
                <Appointments/>
                <AppointmentTooltip showOpenButton showDeleteButton/>
                <AppointmentForm/>
            </Scheduler>
        </Paper>
    );
});
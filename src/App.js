import {Calendar} from "./components/Calendar/Calendar";

import CalendarModel from "./models/CalendarModel";

const app = {
    height: "100%",
    padding: "10px",
    display: 'flex',
    flexDirection: 'column'
}

function App() {
    return (
        <div style={app}>
            <Calendar CalendarModel={CalendarModel}/>
        </div>);
}

export default App;

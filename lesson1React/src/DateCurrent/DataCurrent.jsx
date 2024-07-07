export default function DataCurrent() {
    const now = new Date();
    return (
        <div>
          <h3>Date</h3>
          <span> time { now.toLocaleTimeString()} </span>
        </div>        
    )
  }
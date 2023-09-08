import { FunctionComponent } from "react";

interface ProgressProps {
    completed: number;
    bgcol: string
}
 
const Progress: FunctionComponent<ProgressProps> = ({bgcol, completed}) => {
    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcol,
        borderRadius: 'inherit',
        transition: 'width 1s ease-in-out',
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
    return (
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
    );
}
 
export default Progress;
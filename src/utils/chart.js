import ChartStyles from "./chart_styles";

const BarChart = ({
    arr = [],
}) => {
   return (
    <>
    <div>
        <div style={ChartStyles.CustomChart}>
            <div style={ChartStyles.LineH}></div>
            <div style={ChartStyles.Linev}></div>
            <div style={ChartStyles.chartGrid('auto '.repeat(arr.length), 48, (48/(arr.length-1)))}>
            {
                arr.map((v, ind)=>{
                    return (<div style={ChartStyles.Bars(v*5, 48/(arr.length-1))}></div>)
                })
            }
            </div>
        </div>
    </div>
    </>
   )
}

export default BarChart;
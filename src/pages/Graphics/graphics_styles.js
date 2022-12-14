const GraphicsStyles = {
    ChartContainer : {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        // justifyContent: 'space-around',
        width: '45%',
        margin: '10px',
        padding: '10px',
    },
    Charts : {
        margin: '20px',
        padding: '20px'
    },
    CustomChart : {
        position: 'relative',
        top: '50px',
    },
    LineH :{
        height: '4px',
        width: `48%`,
        background: 'black',
        margin: '10px',
        position: 'absolute',
        bottom: '0',
    },
    Linev : {
        height: `100%`,
        width: `4px`,
        background: 'black',
        margin: '10px',
        position: 'absolute',
        bottom: 0,
    },
    chartGrid : ((cols)=> {
        return {
            display: 'grid',
            gridTemplateColumns: cols,
            width: '48%',
            margin: '20px',
            transform: 'rotateX(180deg)',
            padding: '12px 10px 0px 10px',
            justifyContent: 'space-between',
        }
    }),
    Bars : ((v, w, p)=> {
        return {
            height: `${v}px`,
            margin: '2px',
            width: `${w}px`,
            background: 'orange',
            // bottom: -p,
        }
    }),
}

export default GraphicsStyles;
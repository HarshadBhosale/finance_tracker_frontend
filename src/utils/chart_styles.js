const ChartStyles = {
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
    chartGrid : ((cols, w, g)=> {
        return {
            display: 'grid',
            gridTemplateColumns: cols,
            gap: `${g}%`,
            width: `${w}%`,
            transform: 'rotateX(180deg)',
            padding: `${g}px ${g}px 0px ${g}px`,
            justifyContent: 'center',
        }
    }),
    Bars : ((h, w)=> {
        return {
            height: `${h}px`,
            width: `${w}px`,
            marginTop: `minmax(${54*w}%, 10px)`,
            paddingLeft: `${2*w}px`,
            paddingRight: `${2*w}px`,
            background: 'orange',
        }
    }),
}

export default ChartStyles;
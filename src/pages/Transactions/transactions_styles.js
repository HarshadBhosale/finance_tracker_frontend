const TransactionsStyles = {
    TrasactionForm : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Input : {
        margin: '10px',
        padding: '5px',
        borderRadius: '16px',
        border: '2px solid black',
        backgroundColor: 'Linen',
    },
    Button : {
        fontSize: '16px',
        marginLeft: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2px 8px 2px 8px',
        borderRadius: '16px',
        backgroundColor: 'Linen',
        border: '2px solid black',
    },
    Transactions : {
        margin: "5px",
        position: "sticky",
    },
    Transaction : {
        margin: "5px",
        display: "grid",
        gridTemplateColumns: "minmax(auto,100px) minmax(auto, 120px) auto minmax(auto, 120px) minmax(auto, 100px) minmax(auto, 150px) minmax(auto, 70px)",
        border: "1.5px solid OrangeRed",
        borderRadius: "20px",
    },
    TransactionHeaders : {
        fontWeight: "bold",
        margin: "5px",
        fontSize: "24px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    TransactionFields : {
        margin: "5px",
        fontSize: "24px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    DisableTransaction : {
        margin: "5px",
        fontSize: "16px",
        borderRadius: '20px',
        border: '2px solid red',
        color: "orange",
        backgroundColor: "black",
    },
}

export default TransactionsStyles;
const ErrorMessage = ({ children }) => {
    return (
        <div
            style={{
                width: "85%",
                padding: 10,
                // marginBottom: 10,
                // marginTop: '-2rem',
                marginBottom:'2rem',
                borderRadius: 4,
                marginLeft:'auto',
                marginRight:'auto',
                backgroundColor: "orangered",
                textAlign: "center",
                color: "white",
                textTransform: "capitalize",
            }}
        >
            {children}
        </div>
    );
};

export default ErrorMessage;
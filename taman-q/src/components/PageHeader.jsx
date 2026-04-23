

export default function PageHeader({ className = "", children }) {
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    )
}
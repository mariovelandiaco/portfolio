interface ITitleBar {
    title: string,
    className?:string 
}
export default function TitleBar({ title, className }: ITitleBar) {
    return (
        <div className={`flex items-center ${className}`}>
            <p className="text-4xl text-white font-semibold pr-3">{title}</p>
            <div className="bg-gradient-to-r from-[#FA5252] to-[#DD2476] h-1 w-24 rounded"></div>
        </div>
    )
}
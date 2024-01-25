import { ReactNode } from "react"

const FeatureCard: React.FC<{ icon: ReactNode, title: string, description: string }> = ({ icon, title, description }) => {
    return (
    <div className="flex flex-col shadow-inner shadow-primary rounded-[--radius] p-4 items-center justify-center gap-2 max-w-xs text-center">
        {icon}
        <h3 className="mt-4 scroll-m-20 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="leading-7">{description}</p>
    </div>
  )
}

export default FeatureCard
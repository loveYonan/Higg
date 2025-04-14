interface OverviewPropertiesProps {
    label: string;
    children: React.ReactNode;
}

export const OverviewProperties = ({ label, children }: OverviewPropertiesProps) => {
    return (
        <div className="flex items-start justify-between  gap-x-2 text-white">
            <div className=" min-w-[100px]">
                <p className="text-sm text-white">
                    {label}
                </p>

            </div>
            <div className="flex items-center gap-x-2 text-white">
                {children}
            </div>
        </div>
    )
}

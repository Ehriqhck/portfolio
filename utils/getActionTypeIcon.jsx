import GroundVehicleIcon from '@public/assets/icons/actions/gameCategory/GroundVehicleIcon.jsx'
import SpaceshipIcon from '@public/assets/icons/actions/gameCategory/SpaceshipIcon'
export const getActionTypeIcon = {
    getIcon(type) {
        switch (type) {
            case "vehicles":
                return (
                    <div className='flex flex-row gap-[5px] '>
                        <div className='flex flex-col gap-[1px]'>
                            <SpaceshipIcon width='19px' />
                            {/* <div className='spacer'/> */}
                            <div className='w-[20px] h-[17px] '> <GroundVehicleIcon /></div>
                        </div>
                        <div className='spacer' />
                    </div>)
            case "ground":
                return (
                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex flex-col gap-[1px]'>
                            <div className='w-[20px] h-[17px] '> <GroundVehicleIcon /></div>
                        </div>
                        <div className='spacer' />
                    </div>)
            case "spaceship":
                return (
                    <div className='flex flex-row gap-[5px]'>
                        <div className='flex flex-col gap-[1px]'>
                            <div className='w-[20px]'> <SpaceshipIcon /></div>
                        </div>
                        <div className='spacer' />
                    </div>)
            default:
                return (
                    // <div className='flex flex-row gap-[5px]'>
                    //     <div className='flex flex-col gap-[1px]'>
                    //         <div className='w-[20px]'> <SpaceshipIcon /></div>
                    //     </div>
                    //     <div className='spacer' />
                    // </div>
                    <></>
                )
        }
    },

    getCategoryHeader(node) {

        if (Object.hasOwn(node.data, 'category')) {
            return;
        }
        let category = node.data.category;
        const split = category.split(" / ")

        return (
            <div className='flex flex-row content-start justify-center self-start gap-[5px] '>
                <span className='self-center justify-center '>
                    {node.parentCategory}

                </span>
                <span className='' aria-hidden="true"> {getHeaderIcon(node)}</span>
                <div className="spacer-dialogue" />


                <span className='self-center justify-center '>{label}</span>
                <span className='' aria-hidden="true"> {getHeaderIcon(node)}</span>
                <div className="spacer-dialogue" />
                {expanded}
            </div>
        )
    }
}

export default getActionTypeIcon
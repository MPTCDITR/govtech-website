import Text from '../ui/text';
interface HistoryCheckInCardProps {
    checkIn: {
        roomName: string;
        checkInTime: Date;
    };
}

export default function HistoryCheckInCard({ checkIn }: HistoryCheckInCardProps) {
    const { roomName, checkInTime } = checkIn;
    const currentDate = new Date().toISOString().split('T')[0];
    const dateTimeString = `${currentDate}T${checkInTime}`;
    const formattedTime = new Date(dateTimeString).toLocaleTimeString();

    return (
        <>
            <li className='w-full flex-grow rounded-md border-primary border-l-8 bg-gray-100 px-3 py-5 md:px-5 lg:px-10'>
                <div className='flex flex-row justify-between gap-2'>
                    <div>
                        <Text variant='title'>{roomName}</Text>
                    </div>
                    <div>
                        <Text variant='title'>{formattedTime}</Text>{' '}
                    </div>
                </div>
            </li>
        </>
    );
}

import GoalCard from '../goal-card/goal-card';

const cards = [
    {
        title: 'Header',
        description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.',
    },
    {
        title: 'Header',
        description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.',
    },
    {
        title: 'Header',
        description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.',
    },
    {
        title: 'Header',
        description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.',
    },
    {
        title: 'Header',
        description:
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.',
    },
    {
        title: 'Header',
        description:
            'remaining essentially unchanged. It was popularised in the 1960s with the.',
    },
    // Add more cards as needed
];

const GoalSection = () => {
    return (
        <ul className='container grid list-none grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
            {cards.map((card) => (
                <li key={card.title}>
                    <GoalCard title={card.title} description={card.description} />
                </li>
            ))}
        </ul>
    );
};

export default GoalSection;

import Image from 'next/image'

export default function InfoPage({ name, }) {
    return(
        <>
        <div>
            <h1>{name}</h1>
        </div>
        <div>
            <Image/>
        </div>
        <div>
            {sectionName}
            {bio}
        </div>
        {/* add line */}
        <div>
            <div>
                {skills}
            </div>
            <div>
                {description}
            </div>
        </div>

        </>
    )
}
import PageLayout from '../components/PageLayout'

export default function Course() {
    return (
        <PageLayout
            title="Courses"
            description="Helpful courses for guidance."
            toc={[
                { id: 'certification', label: 'Certification' },
                { id: 'youtube', label: 'YouTube' },
            ]}
        >
            <section id="certification" className="doc-block">
                <h2>Certification</h2>
                <ul>
                    <li>
                        <a href="https://www.coursera.org/specializations/firstprinciplesofcomputervision#courses" className='underline text-[#c4c4c5]' target='_blank'>First Principles of Computer Vision Specialization
                        </a>
                        <p id='subtext'>The material covered in these docs is heavily inspired by this course by Shree Nayar. I have also done this specialization which consists of five courses and would recommend taking it to get deeper understanding.</p>
                    </li>
                    <li>
                        <a href="https://www.coursera.org/learn/digital" className='underline text-[#c4c4c5]' target='_blank'>Fundamentals of Digital Image and Video Processing
                        </a>
                        <p id='subtext'>Image processing provides the base for computer vision application and even CNN, so it's always beneficial to know basic image and video processing techniques.</p>
                    </li>
                </ul>

            </section>

            <section id="youtube" className="doc-block">
                <h2>YouTube</h2>

                <ul>
                    <li>
                        <a href="https://youtube.com/@firstprinciplesofcomputerv3258?si=Sfb5eSF6uccEHRon" className='underline text-[#c4c4c5]' target='_blank'>First Principles of Computer Vision
                        </a>
                        <p id='subtext'>This channel also provides the lecture series by Shree Nayar and covers almost all topics that are discussed in the specialization course.</p>
                    </li>
                    <li>
                        <a href="https://youtube.com/@explaining-ai?si=YjTQMHuyUJSnYaB6" className='underline text-[#c4c4c5]' target='_blank'>Explaining AI
                        </a>
                        <p id='subtext'>This channel has lectures on object detection models, paper discussions and their implementations in PyTorch. Even after reading the lectures, I'd recommend watching the implementations here to understand the papers better.</p>
                    </li>
                    
                </ul>
            </section>
        </PageLayout>
    )
}
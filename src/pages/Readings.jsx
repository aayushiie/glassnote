import PageLayout from '../Components/PageLayout'

export default function Readings() {
  return (
    <PageLayout
      title="Readings"
      description="Books, blogs, and papers for research."
      toc={[
        { id: 'books', label: 'Books' },
        { id: 'blogs', label: 'Blog Posts' },
        { id: 'papers', label: 'Research Papers' },
      ]}
    >
      <section id="books" className="doc-block">
        <h2>Books</h2>

        <ul>
          <li>
            <a href="https://amzn.in/d/0eKfBiOt" className='underline text-[#c4c4c5]' target='_blank'>Digital Image Processing by Rafael C. Gonzalez and Richard E. Woods
            </a>
          </li>
          <li>
            <a href="https://amzn.in/d/03C2csmm" className='underline text-[#c4c4c5]' target='_blank'>Computer Vision: Algorithms and Applications by Richard Szeliski
            </a>
          </li>
        </ul>
      </section>

      <section id="blogs" className="doc-block">
        <h2>Blog Posts</h2>

        <ul>
          <li>
            <a href="https://developer.nvidia.com/blog/category/computer-vision/" className='underline text-[#c4c4c5]' target='_blank'>Computer Vision / Video Analytics | NVIDIA Technical Blog
            </a>
          </li>
          <li>
            <a href="https://thegradient.pub/" className='underline text-[#c4c4c5]' target='_blank'>The Gradient
            </a>
          </li>
          
        </ul>

      </section>

      <section id="papers" className="doc-block">
        <h2>Research Papers</h2>

        <ul>
          <li>
            <a href="https://link.springer.com/article/10.1023/B:VISI.0000022288.19776.77" className='underline text-[#c4c4c5]' target='_blank'>Efficient Graph-Based Image Segmentation
            </a>
          </li>
          <li>
            <a href="https://www.researchgate.net/publication/262270555_Selective_Search_for_Object_Recognition" className='underline text-[#c4c4c5]' target='_blank'>Selective Search for Object Recognition
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/1311.2524" className='underline text-[#c4c4c5]' target='_blank'>Rich feature hierarchies for accurate object detection and semantic segmentation
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/1504.08083" className='underline text-[#c4c4c5]' target='_blank'>Fast R-CNN
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/1506.01497" className='underline text-[#c4c4c5]' target='_blank'>Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/1506.02640" className='underline text-[#c4c4c5]' target='_blank'>You Only Look Once: Unified, Real-Time Object Detection
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/1512.02325" className='underline text-[#c4c4c5]' target='_blank'>SSD: Single Shot MultiBox Detector
            </a>
          </li>
        </ul>
      </section>
    </PageLayout>
  )
}
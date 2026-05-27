import PageLayout from '../Components/PageLayout'

export default function M01c02() {
  return (
    <PageLayout
      title="What is Computer Vision?"
      description="Module 01: Chapter 02"
      toc={[
        { id: 'vision', label: 'Vision' },
        { id: 'computer-vision', label: 'Computer Vision' },
        { id: 'image', label: 'Image' },
        { id: 'application', label: 'Applications' },
        { id: 'eye', label: 'Human Eye' },
        { id: 'illusion', label: 'Illusion' },
      ]}
    >
      <section id="vision" className="doc-block">
        <h2>Vision</h2>
        <p>Vision is one of the most powerful senses. We are able to perceive objects around us because light reflects off objects and enters our eyes. Without light, there would be no vision.</p>
        <p>When we have a camera in our environment that is connected to a software with capabilities of vision, some portion of the light is also scattered in the direction of the camera. That camera now takes the role of the human eye, capturing a 3-dimensional scene and projecting it onto a 2-dimensional image. This 2D image is passed to the vision software that provides a description of the scene.</p>

        {/* <pre>
          <code>npm install</code>
        </pre> */}
      </section>

      <section id="computer-vision" className="doc-block">
        <h2>Computer Vision</h2>

        <p>
          Computer Vision has been defined in many different ways by different researchers:
          <ul className='list-disc'>
            <li>It involves automating tasks related to human visual perception.</li>
            <li>It extracts meaningful information from images and videos.</li>
            <li>It is the inverse of image formation. Vision is taking the 3D world and presenting it in the form of a 2D image. But the goal of computer vision is to take that 2D image and infer meaningful properties of the 3-dimensional world from it.</li>
          </ul>
        </p>
        <p>Regardless of how we define computer vision, it continues to be an asset to this world in multidisciplinary fields.</p>
      </section>

      <section id="image" className="doc-block">
        <h2>Image</h2>

        <p>An image is an array of pixels. A pixel represents the smallest discrete unit of a digital image. In digital image processing, an image is a 2-dimensional function, <i>f(x, y),</i> whose value at a particular coordinate represents the intensity or gray level at that point. When x, y, and the intensity of function (f) are all finite and discrete quantities then it is considered a digital image.
        </p>
        <p>Humans can perceive images only within the visible band of the electromagnetic spectrum. However, imaging systems can also form images using X-rays, infrared radiation, radio waves, or even ultrasound, which humans cannot directly perceive without specialized devices.</p>
        <p>Computer vision helps in bridging the gap between what the human eye cannot directly perceive. Imagine looking at an image with two children playing in a park covered in light fog, with swings in the background. Now from an image like this, it is easy to interpret the number of people, the setting of the scene (park with swings), infer the playful and lighthearted mood of the scene, and understand the weather through fog. However, this same image is nothing but a set of pixels that is given to the vision software to interpret the same information. This is why the task of computer vision is both challenging and fascinating.</p>
      </section>

      <section id="application" className="doc-block">
        <h2>Applications</h2>
        <p>
          Some primary applications of computer vision:
          <ul className='list-disc'>
            <li>In factories, the robots are incorporated with vision software to deal with problems of the physical world, such as validating the positions before mounting or assembling parts. There are also visual inspections of food items or other products where the speed of the passing products is so high that humans cannot reliably detect errors at such speeds.</li>
            <li>Optical character recognition (OCR), i.e. reading words and letters. e.g. license plate reading, handwriting recognition, signatures verification, etc.</li>
            <li>Biometrics, which uses physical characteristics to determine identity. e.g. iris recognition, face detection and recognition</li>
            <li>Object detection and tracking is a very popular application. Being able to not only detect people in a crowd, but also track them as they move. It is used in security systems. Another application of this technology came during Covid-19 lockdown to detect the distance between people and track them to determine whether they were violating minimum safety distance guidelines.</li>
            <li>In gaming, the motion of the human body  is captured and that motion is used to play the game.</li>
            <li>Visual search through pictures or real-time instances.</li>
            <li>Autonomous Navigation, such as self-driving cars.</li>
            <li>Remote sensing through satellites orbiting the earth. These satellites are equipped with high-quality sensors and cameras that enable them to collect information as they orbit the earth, and this information can be used to reconstruct the 3D maps of the earth at different instances. These instances can be used in maps such as Google Maps, or to monitor a disaster zone, or explore the long-term effects of climate change.</li>
            <li>Medical image analysis through X-rays, ultrasound imaging, magnetic resonance imaging. Computer vision can help with diagnosis or analysing the anatomical structures.</li>
          </ul>
        </p>
      </section>

      <section id="eye" className="doc-block">
        <h2>Human Eye</h2>

        <p>
          How does the human eye perceive an image? The eye has a lens that projects the 3-dimensional world onto a 2-dimensional image. This image is formed on the retina, which also has cells within it that do early visual processing. The processed visual information (reduced image) travels from the retina through the optic nerve and goes to the lateral geniculate nucleus (LGN). The LGN helps relay and organize visual information before it reaches the visual cortex. It sends that information to the visual cortex. Different parts of the visual cortex are responsible for different interpretations such as color, shape, motion, etc.
        </p>
      </section>

      <section id="illusion" className="doc-block">
        <h2>Illusion</h2>

        <p>
          Human vision is often more qualitative than quantitatively precise. e.g. estimating the length of a pen. Although no computer vision system fully matches the versatility of human vision, it definitely demonstrates higher precision. Human vision is often erroneous, i.e. we often perceive what our brain expects to see. This leads to many optical illusions such as:
          <ul className='list-disc'>
            <li>Fraser's spiral</li>
            <li>Checker shadow</li>
            <li>Donguri wave</li>
            <li>Forced perspective</li>
          </ul>
          There are also visual ambiguities that arise due to different perspectives in which 3-dimensional images can be interpreted. e.g. the picture of a crater on a mound, or vice versa.
        </p>
        <p>Why do these illusions and ambiguities happen? It's because we live on this assumption that light is coming from above (because the Sun is typically our primary source of illumination). So, instinctively, we don't imagine that illumination is coming from below. We use this assumption first and then try to interpret the shading of an object. In doing so, we're able to form different interpretation of an object or an image.</p>
      </section>
    </PageLayout>
  )
}
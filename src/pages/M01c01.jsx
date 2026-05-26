import PageLayout from '../Components/PageLayout'
import { NavLink } from 'react-router-dom'

export default function M01c01() {
  return (
    <PageLayout
      title="Introduction"
      description="Module 01: Chapter 01"
      toc={[
        { id: 'welcome', label: 'Welcome' },
        { id: 'module1', label: 'Module 01' },
        { id: 'module2', label: 'Module 02' },
        { id: 'module3', label: 'Module 03' },
        { id: 'module4', label: 'Module 04' },
        { id: 'module5', label: 'Module 05' },
        { id: 'module6', label: 'Module 06' },
        { id: 'module7', label: 'Module 07' },
        { id: 'module8', label: 'Module 08' },
        { id: 'module9', label: 'Module 09' },
        { id: 'module10', label: 'Module 10' },
        { id: 'module11', label: 'Module 11' },
        { id: 'module12', label: 'Module 12' },
      ]}
    >
      <section id="welcome" className="doc-block">
        <h2>Welcome</h2>

        <p>
          Computer Vision is an evolving field of computing whose purpose is to equip machines with the sense of sight. I love this field and I love teaching, which is why I wanted to do a series of posts delving deeper, starting with the basics of Optics in Physics and going further into concepts of Radiometry, image stitching, appearance matching, and then finally understanding the mathematics of the state-of-the-art object detection models (from RCNN to YOLO versions). I want this series to be as in-depth as possible, discussing every minute concept involved in computer vision along with its implementation. So I prepared a curriculum (perhaps a course handout, if you fancy calling it that) 'cause I like doing just that little extra unnecessary work.
        </p>
        <p>Following are the different modules and their corresponding chapters. The chapters that are available are underlined and linked to their respective page.</p>
      </section>

      <section id="module1" className="doc-block">
        <h2>Module 01: Introduction to Computer Vision</h2>
        <ul>
          <li><NavLink to={"/m01c01"} className="underline text-[#c4c4c5]">Chapter 1: Introduction</NavLink></li>
          <li><NavLink to={"/m01c02"} className="underline text-[#c4c4c5]">Chapter 2: What is computer vision?</NavLink></li>
        </ul>
      </section>

      <section id="module2" className="doc-block">
        <h2>Module 02: Optical Flow</h2>
        <ul>
          <li>Chapter 1: Motion field and optical flow</li>
          <li>Chapter 2: Optical flow constraint equation</li>
          <li>Chapter 3: Lucas-Kanade method</li>
          <li>Chapter 4: Coarse-to-Fine flow estimation</li>
          <li>Chapter 5: Motion and structure</li>
          <li>Chapter 6: Tomasi-Kanade Factorization</li>
          <li>Chapter 7: Object tracking and change detection</li>
          <li>Chapter 8: Gaussian mixture model</li>
          <li>Chapter 9: Object tracking methods</li>
        </ul>
      </section>

      <section id="module3" className="doc-block">
        <h2>Module 03: Image Formation</h2>
        <ul>
          <li>Chapter 1: Perspective</li>
          <li>Chapter 2: Image formation using lenses </li>
          <li>Chapter 3: Depth of field</li>
          <li>Chapter 4: Issues related to lenses and wide angle cameras</li>
          <li>Chapter 5: Animal eyes</li>
          <li>Chapter 6: Image sensing</li>
          <li>Chapter 7: Resolution, noise, and dynamic range</li>
          <li>Chapter 8: Sensing color</li>
          <li>Chapter 9: Camera response and HDR imaging</li>
          <li>Chapter 10: Binary images</li>
          <li>Chapter 11: Segmenting binary images</li>
        </ul>
      </section>

      <section id="module4" className="doc-block">
        <h2>Module 04: Digital Image Processing</h2>
        <ul>
          <li>Chapter 1: Pixels, filters, and convolution</li>
          <li>Chapter 2: Template matching by correlation</li>
          <li>Chapter 3: Fourier transform</li>
          <li>Chapter 4: Convolution theorem</li>
          <li>Chapter 5: Image filtering in frequency domain</li>
          <li>Chapter 6: Deconvolution</li>
          <li>Chapter 7: Sampling theory and aliasing</li>
          <li>Chapter 8: Image restoration</li>
          <li>Chapter 9: Thresholding</li>
          <li>Chapter 10: Image compression</li>
        </ul>
      </section>

      <section id="module5" className="doc-block">
        <h2>Module 05: Depth from Defocus</h2>
        <ul>
          <li>Chatper 1: Overview of depth from defocus</li>
          <li>Chatper 2: Point spread function</li>
          <li>Chatper 3: Active illumination methods</li>
          <li>Chatper 4: Photometric stereo systems</li>
          <li>Chatper 5: Structured light range finding</li>
          <li>Chatper 6: Phase shifting method</li>
          <li>Chatper 7: Structured Light Systems</li>
          <li>Chatper 8: Time of flight method</li>
        </ul>
      </section>

      <section id="module6" className="doc-block">
        <h2>Module 6: Camera Calibration</h2>
        <ul>
          <li>Chapter 1: Overview of camera calibration</li>
          <li>Chapter 2: Linear camera model</li>
          <li>Chapter 3: Intrinsic and extrinsic matrices</li>
          <li>Chapter 4: Simple stereo</li>
          <li>Chapter 5: Uncalibrated stereo</li>
          <li>Chapter 6: Epipolar geometry</li>
          <li>Chapter 7: Stereo vision in nature</li>
          <li>Chapter 8: Estimating fundamental matrix</li>
          <li>Chapter 9: Finding correspondences and computing depth</li>
        </ul>
      </section>

      <section id="module7" className="doc-block">
        <h2>Module 7: Edge Detection and SIFT Detectors</h2>
        <ul>
          <li>Chapter 1: What is edge?</li>
          <li>Chapter 2: Edge detection using gradients</li>
          <li>Chapter 3: Edge detection using laplacian</li>
          <li>Chapter 4: Canny edge detector</li>
          <li>Chapter 5: Corner detection</li>
          <li>Chapter 6: Boundary detection</li>
          <li>Chapter 7: Active contours</li>
          <li>Chapter 8: Hough transform</li>
          <li>Chapter 9: SIFT detector</li>
          <li>Chapter 10: What is an interest point?</li>
          <li>Chapter 11: SIFT descriptor</li>
        </ul>
      </section>

      <section id="module8" className="doc-block">
        <h2>Module 8: Image Segmentation</h2>
        <ul>
          <li>Chapter 1: Overview of image segmentation</li>
          <li>Chapter 2: Segmentation by clustering</li>
          <li>Chapter 3: k-means segmentation</li>
          <li>Chapter 4: Mean-shift segmentation</li>
          <li>Chapter 5: Graph based segmentation</li>
        </ul>
      </section>

      <section id="module9" className="doc-block">
        <h2>Module 9: Image Stitching and Face Detection</h2>
        <ul>
          <li>Chapter 1: Image stitching</li>
          <li>Chapter 2: Computing homography</li>
          <li>Chapter 3: Dealing with outliers: RANSAC</li>
          <li>Chapter 4: Warping and blending images</li>
          <li>Chapter 5: Overview of face detection</li>
          <li>Chapter 6: Haar features for face detection</li>
          <li>Chapter 7: Integral Image</li>
          <li>Chapter 8: Nearest neighbor classifier</li>
          <li>Chapter 8: SVM for face detection</li>
        </ul>
      </section>

      <section id="module10" className="doc-block">
        <h2>Module 10: Radiometry and Reflectance</h2>
        <ul>
          <li>Chapter 1: Overview of radiometry and reflectance</li>
          <li>Chapter 2: Scene radiance and image irradiance</li>
          <li>Chapter 3: BRDF</li>
          <li>Chapter 4: Reflectance models</li>
          <li>Chapter 5: Reflection from rough surfaces</li>
          <li>Chapter 6: Dichromatic model</li>
          <li>Chapter 7: Photometric stereo</li>
          <li>Chapter 8: Gradient space and reflectance map</li>
          <li>Chapter 9: Lambertian case</li>
          <li>Chapter 10: Calibration based photometric stereo</li>
          <li>Chapter 11: Shape from normals</li>
          <li>Chapter 12: Interreflections</li>
          <li>Chapter 13: Shape from shading</li>
        </ul>
      </section>

      <section id="module11" className="doc-block">
        <h2>Module 11: Appearance Matching</h2>
        <ul>
          <li>Chapter 1: Shape vs appearance</li>
          <li>Chapter 2: Learning appearance</li>
          <li>Chapter 3: Principal component analysis</li>
          <li>Chapter 4: PCA and SVD</li>
          <li>Chapter 5: Parametric appearance representation</li>
        </ul>
      </section>

      <section id="module12" className="doc-block">
        <h2>Module 12: Object Detection Models</h2>
        <ul>
          <li>Chapter 1: R-CNN</li>
          <li>Chapter 2: Mean average precision (mAP)</li>
          <li>Chapter 3: Fast R-CNN</li>
          <li>Chapter 4: Faster R-CNN</li>
          <li>Chapter 5: YOLOv1</li>
          <li>Chapter 6: Single shot multibox detector (SSD)</li>
          <li>Chapter 7: YOLOv2</li>
          <li>Chapter 8: YOLOv3</li>
          <li>Chapter 9: YOLOv4, CIOU Loss, CSPDarknet53, SPP, PANet</li>
          <li>Chapter 10: DETR</li>
          <li>Chapter 11: YOLOv5</li>
        </ul>
      </section>
    </PageLayout>
  )
}
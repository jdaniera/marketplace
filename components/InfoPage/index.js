import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonBox from '../ButtonBox';
import styles from './InfoPage.module.css'

export default function InfoPage({
  mentor,
  classes,
  workshop,
  service,
  title,
  bio,
  skills,
  mentorType,
  mentorLength,
  host,
  imageUrl,
  imageWidth,
  imageHeight,
  imageAlt,
  classDate,
  classTime,
  classSize,
  classPrice,
  description,
  serviceType,
  servicePrice,
  availability,
  buttonText
}) {
  return (
    <>
    {/* Mentor Profile Page */}
      {mentor && (
        <div className={styles.infoContainer}>
          <div className={styles.title}><h1>{title}</h1></div>
          <div className={styles.imageContainer}>
            <Image 
                src={imageUrl}
                width={imageWidth}
                height={imageHeight}
                alt={imageAlt}
            />
          </div>
          <div className={styles.descContainer}>
            <div className={`${styles.infoDescription} ${styles.mentorBio}`}>
              <h2>Bio</h2>
              <p>"{bio}"</p>
            </div>
            <hr className={styles.mentorBioLine}/>
            <div className={styles.shadowContainer}>
              <div className={styles.infoDescription}>
                <h2>Skills</h2>
                <p>{skills}</p>
              </div>
              <div className={styles.infoDescription}>
                <h2>Description</h2>
                <div>{description}</div>
                <div className={styles.mentorDetails}>
                  <p>Mentorship Type: {mentorType}</p>
                  <p>Session Length: {mentorLength}</p>
                </div>
              </div>
            </div>

          </div>
          <div className={styles.buttonContainer}>
            <ButtonBox
              buttonText={buttonText}
              link='/MentorApply'
            />
          </div>

        </div>
          
      )}


      {/* Class Info Page */}
      {
        (classes || workshop) && (
          <div>
            <div><h1>{title}</h1></div>
            <div>
            {showBeginner && <div className={styles.tagOne}>Beginner</div>}
            {showIntermediate && <div className={styles.tagTwo}>Intermediate</div>}
            {showAdvanced && <div className={styles.tagThree}>Advanced Skills</div>}
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src={imageUrl}
                width={imageWidth}
                height={imageHeight}
                alt={imageAlt}
              />
            </div>
            <div className={styles.otherImage}>
              <Image 
                  src={imageUrl}
                  width={imageWidth}
                  height={imageHeight}
                  alt={imageAlt}
              />
            </div>
            <div className={styles.viewMoreCardContainer}>
              <div className={styles.viewMoreCard}>
                <Link href='/classesAll'>
                    <div className={styles.viewMoreCardOverlay}></div>
                      <div className={styles.viewMoreCardContent}>
                          <p className={styles.viewMoreCardText}>View More</p>
                          <Image src='/images/classInfo/classInfo05.svg' width={88} height={88} alt='Pottery Image'/>
                      </div>
                </Link>
              </div>
            </div>
            <div>
              <button>{buttonText}</button>
            </div>
            <div>
              <div className={styles.classInfoDecriptionContent}><p>Hosted By:<span>{host}</span></p></div>            
              <div className={styles.classInfoDecriptionContent}><p>Date:<span>{classDate}</span></p></div>
              <div className={styles.classInfoDecriptionContent}><p>Size:<span>{classSize}</span></p></div>
              <div className={styles.classInfoDecriptionContent}><p>Time:<span>{classTime}</span></p></div>
              <div className={styles.classInfoDecriptionContent}><p>Price:<span>{classPrice}</span></p></div>
            </div>
            <div className={styles.classDescription}>
              <h2>Class Description</h2>
              <p>{description}</p>
            </div>
          </div>
        )
      }

      {/* Service Provider Page */}
      {
        service && (
          <div>
            <div className={styles.mainImage}>
              <Image 
                    src={imageUrl}
                    width={imageWidth}
                    height={imageHeight}
                    alt={imageAlt}
              />
            </div>
            <div className={styles.mainName}>
              <div className={styles.mainNameContainer}>
                <p className={styles.nametitle}>{title}</p>
                <div className={styles.spacingLine}></div>
                <p>{serviceType}</p>
              </div>
            </div>
            <div className={styles.serviceDetails}>
                <p className={styles.serviceDetailsHeader}>Service Details</p>
                <p className={styles.serviceDetailsBody}>{description}</p>
                    <div className={styles.spacingLine2}></div>
                <p className={styles.serviceDetailsBody}><span className={styles.span}>Hourly Pricing:</span>{servicePrice}</p>
                <p className={styles.serviceDetailsBody}><span className={styles.span}>Availibility:</span>{availability}</p>
            </div>

          </div>
        )
      }
    </>
  );
}

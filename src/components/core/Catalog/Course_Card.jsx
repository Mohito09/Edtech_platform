import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import GetAvgRating from "../../../utils/avgRating"
import RatingStars from "../../Common/RatingStars"

function Course_Card({ course, Height }) {
  const [avgReviewCount, setAvgReviewCount] = useState(0)

  useEffect(() => {
    if (course) {
      const reviews = course?.ratingAndReviews || []
      const count = GetAvgRating(reviews)
      setAvgReviewCount(count)
    }
  }, [course])

  return (
    <Link to={`/courses/${course?._id || ""}`}>
      <div>
        <img
          src={course?.thumbnail}
          alt="course"
          className={`${Height} w-full rounded-xl object-cover`}
        />

        <div className="p-2 flex flex-col gap-2">
          <p className="text-xl text-richblack-5">
            {course?.courseName || "Untitled Course"}
          </p>

          <p className="text-sm text-richblack-50">
            {course?.instructor?.firstName || "Unknown"}{" "}
            {course?.instructor?.lastName || ""}
          </p>

          <div className="flex items-center gap-2">
            <span className="text-yellow-5">
              {avgReviewCount || 0}
            </span>

            <RatingStars Review_Count={avgReviewCount || 0} />

            <span className="text-richblack-400">
              {(course?.ratingAndReviews || []).length} Ratings
            </span>
          </div>

          <p className="text-xl text-richblack-5">
            Rs. {course?.price || 0}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Course_Card
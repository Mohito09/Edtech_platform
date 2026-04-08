import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import Footer from "../components/Common/Footer"
import Course_Card from "../components/core/Catalog/Course_Card"
import Course_Slider from "../components/core/Catalog/Course_Slider"
import { apiConnector } from "../services/apiConnector"
import { categories } from "../services/apis"
import { getCatalogPageData } from "../services/operations/pageAndComponntDatas"
import Error from "./Error"

function Catalog() {
  const { loading } = useSelector((state) => state.profile)
  const { catalogName } = useParams()

  const [active, setActive] = useState(1)
  const [catalogPageData, setCatalogPageData] = useState(null)
  const [categoryId, setCategoryId] = useState("")

  // Fetch Categories
  useEffect(() => {
    ;(async () => {
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)

        const matchedCategory = res?.data?.data?.find(
          (ct) =>
            ct.name.split(" ").join("-").toLowerCase() === catalogName
        )

        if (!matchedCategory) {
          setCatalogPageData({ success: false })
          return
        }

        setCategoryId(matchedCategory._id)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
    })()
  }, [catalogName])

  // Fetch Catalog Data
  useEffect(() => {
    if (categoryId) {
      ;(async () => {
        try {
          const res = await getCatalogPageData(categoryId)
          setCatalogPageData(res)
        } catch (error) {
          console.log(error)
        }
      })()
    }
  }, [categoryId])

  if (loading || !catalogPageData) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  if (!catalogPageData.success) {
    return <Error />
  }

  return (
    <>
      {/* Hero */}
      <div className="bg-richblack-800 px-4">
        <div className="mx-auto max-w-maxContent py-10">
          <p className="text-richblack-300">
            Home / Catalog /
            <span className="text-yellow-25 ml-2">
              {catalogPageData?.data?.selectedCategory?.name}
            </span>
          </p>

          <h1 className="text-3xl text-richblack-5">
            {catalogPageData?.data?.selectedCategory?.name}
          </h1>

          <p className="text-richblack-200">
            {catalogPageData?.data?.selectedCategory?.description}
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="max-w-maxContent mx-auto px-4 py-10">
        <h2 className="section_heading">Courses to get you started</h2>

        <Course_Slider
          Courses={
            catalogPageData?.data?.selectedCategory?.courses?.filter(Boolean) ||
            []
          }
        />
      </div>

      {/* Section 2 */}
      <div className="max-w-maxContent mx-auto px-4 py-10">
        <h2 className="section_heading">
          Top courses in{" "}
          {catalogPageData?.data?.differentCategory?.name ||
            "Other Categories"}
        </h2>

        <Course_Slider
          Courses={
            catalogPageData?.data?.differentCategory?.courses?.filter(Boolean) ||
            []
          }
        />
      </div>

      {/* Section 3 */}
      <div className="max-w-maxContent mx-auto px-4 py-10">
        <h2 className="section_heading">Frequently Bought</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {catalogPageData?.data?.mostSellingCourses
            ?.filter(Boolean)
            ?.slice(0, 4)
            ?.map((course, i) => (
              <Course_Card key={i} course={course} Height="h-[400px]" />
            ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Catalog
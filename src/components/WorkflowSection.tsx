'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function ProjectWorkflow() {
  const { theme } = useTheme()

  return (
    <section className="w-full py-12 px-4 md:px-20 transition-colors duration-300 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        How We Work
      </h2>
      <p className="text-xl md:text-2xl font-bold text-center text-purple-600 dark:text-purple-400 mb-8">
        From Idea to Impact — Our Project Workflow
      </p>

      <div className="flex justify-center mb-10">
        <Image
          src="/workflow-demo.png" // Replace with your own image path
          alt="Project Workflow Diagram"
          width={800}
          height={600}
          className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
        />
      </div>

      <div className="text-center space-y-6">
        <h3 className="text-lg md:text-xl font-semibold">
          Your Journey Ends Here — and a New One Begins!
        </h3>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-300">
          You’ve seen how we bring ideas to life. Now, let’s bring yours into the world — with purpose, precision, and passion. Whether you’re starting from scratch or scaling something big, we’re ready to help you make an impact.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition-all">
            START YOUR PROJECT
          </button>
          <button className="border-2 border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-[#2c2c2c] font-semibold py-2 px-6 rounded-lg transition-all">
            GET A FREE QUOTE
          </button>
        </div>
      </div>
    </section>
  )
}

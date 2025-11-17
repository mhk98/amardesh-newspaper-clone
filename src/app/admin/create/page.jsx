"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { generateSlug, DEFAULT_NEWS_IMAGE } from "@/lib/utils";

export default function CreateNewsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
    excerpt: "",
    image: "",
    isBreaking: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newsData = {
      id: Date.now(),
      title: formData.title,
      slug: generateSlug(formData.title),
      author: formData.author,
      publishedAt: new Date().toISOString(),
      category: formData.category,
      content: formData.content,
      excerpt: formData.excerpt || formData.content.substring(0, 160),
      image: formData.image || DEFAULT_NEWS_IMAGE,
      isBreaking: formData.isBreaking || false,
    };
    console.log("Create news:", newsData);
    router.push("/admin");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="font-bengali text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Add New News
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-bengali font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
            focus:ring-2 focus:ring-primary focus:border-transparent font-bengali 
            dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-bengali font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Author *
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
              focus:ring-2 focus:ring-primary focus:border-transparent font-bengali 
              dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-bengali font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
              focus:ring-2 focus:ring-primary focus:border-transparent font-bengali 
              dark:bg-gray-800 dark:text-white"
            >
              <option value="">Select Category</option>
              <option value="National">National</option>
              <option value="International">International</option>
              <option value="Sports">Sports</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Business">Business</option>
              <option value="Culture">Culture</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-bengali font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 
            rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent 
            dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block font-bengali font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Summary
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 
            rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent 
            font-bengali dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block font-bengali font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Content *
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={10}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 
            rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent 
            font-bengali dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="isBreaking"
            checked={formData.isBreaking}
            onChange={handleChange}
            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label className="ml-2 font-bengali text-gray-700 dark:text-gray-300">
            Breaking News
          </label>
        </div>

        <div className="flex gap-4">
          <Button type="submit" className="font-bengali">
            Publish
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="font-bengali"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

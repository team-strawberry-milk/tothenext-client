import Tag from "@/components/common/Tag"; // Adjust the path based on your actual project structure

export default function Activity() {
  const tags = [
    { text: "tag-contest", label: "공모전" },
    { text: "tag-support", label: "서포터즈" },
    { text: "tag-intern", label: "인턴" },
    { text: "tag-club", label: "동아리" },
    { text: "tag-volunteer", label: "봉사활동" },
    { text: "tag-edu", label: "교육" }
  ];

  return (
    <div className="">
      <section className="py-20 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="md:max-w-2xl text-center mx-auto mb-12">
            <div
              className={`inline-block mb-5 px-3 py-0.5 font-medium text-sm rounded-md border border-primary-black text-primary-black`}
            >
              <span>대외활동</span>
            </div>
            <h3 className="font-heading mb-6 text-4xl font-semibold">
              ACTIVITY
            </h3>
            <div className="inline-block">
              {tags.map((tag, index) => (
                <Tag
                  key={index}
                  text={tag.text}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/2 p-3">
              <div className="flex flex-wrap -m-3">
                <div className="w-auto p-3">
                  <div className="w-44">
                    <img
                      src="https://shuffle.dev/placeholder/pictures/1280x1280.svg?primary=dcdcdc"
                      alt=""
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 p-3">
                  <div className="flex flex-col justify-between h-full">
                    <div className="w-auto mb-5">
                      <div className="md:max-w-md">
                        <Tag
                          text="contest"
                        />
                        <p className="text-lg text-gray-700 font-medium">
                          <a href="#">Navigating the Future of Industry 4.0</a>
                        </p>
                      </div>
                    </div>
                    <div className="w-auto">
                      <span className="text-sm text-gray-500 font-medium">
                        Jul 14, 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-3">
              <div className="flex flex-wrap -m-3">
                <div className="w-auto p-3">
                  <div className="w-44">
                    <img
                      src="https://shuffle.dev/placeholder/pictures/1280x1280.svg?primary=dcdcdc"
                      alt=""
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 p-3">
                  <div className="flex flex-col justify-between h-full">
                    <div className="w-auto mb-5">
                      <div className="md:max-w-md">
                        <Tag
                          text="support"
                        />
                        <p className="text-lg text-gray-700 font-medium">
                          <a href="#">
                            Sustainable Practices for Long-Term Growth
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="w-auto">
                      <span className="text-sm text-gray-500 font-medium">
                        Jul 14, 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-3">
              <div className="flex flex-wrap -m-3">
                <div className="w-auto p-3">
                  <div className="w-44">
                    <img
                      src="https://shuffle.dev/placeholder/pictures/1280x1280.svg?primary=dcdcdc"
                      alt=""
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 p-3">
                  <div className="flex flex-col justify-between h-full">
                    <div className="w-auto mb-5">
                      <div className="md:max-w-md">
                        <Tag
                          text="intern"
                        />
                        <p className="text-lg text-gray-700 font-medium">
                          <a href="#">
                            Diversity and Inclusion: Our Corporate Journey
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="w-auto">
                      <span className="text-sm text-gray-500 font-medium">
                        Jul 14, 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-3">
              <div className="flex flex-wrap -m-3">
                <div className="w-auto p-3">
                  <div className="w-44">
                    <img
                      src="https://shuffle.dev/placeholder/pictures/1280x1280.svg?primary=dcdcdc"
                      alt=""
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 p-3">
                  <div className="flex flex-col justify-between h-full">
                    <div className="w-auto mb-5">
                      <div className="md:max-w-md">
                        <Tag
                          text="club"
                        />
                        <p className="text-lg text-gray-700 font-medium">
                          <a href="#">
                            Revolutionizing Customer Service with Tech
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="w-auto">
                      <span className="text-sm text-gray-500 font-medium">
                        Jul 14, 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-3">
              <div className="flex flex-wrap -m-3">
                <div className="w-auto p-3">
                  <div className="w-44">
                    <img
                      src="https://shuffle.dev/placeholder/pictures/1280x1280.svg?primary=dcdcdc"
                      alt=""
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 p-3">
                  <div className="flex flex-col justify-between h-full">
                    <div className="w-auto mb-5">
                      <div className="md:max-w-md">
                        <Tag
                          text="volunteer"
                        />
                        <p className="text-lg text-gray-700 font-medium">
                          <a href="#">Cybersecurity in a Digital Age</a>
                        </p>
                      </div>
                    </div>
                    <div className="w-auto">
                      <span className="text-sm text-gray-500 font-medium">
                        Jul 14, 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-3">
              <div className="flex flex-wrap -m-3">
                <div className="w-auto p-3">
                  <div className="w-44">
                    <img
                      src="https://shuffle.dev/placeholder/pictures/1280x1280.svg?primary=dcdcdc"
                      alt=""
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 p-3">
                  <div className="flex flex-col justify-between h-full">
                    <div className="w-auto mb-5">
                      <div className="md:max-w-md">
                        <Tag
                          text="edu"
                        />
                        <p className="text-lg text-gray-700 font-medium">
                          <a href="#">Cybersecurity in a Digital Age</a>
                        </p>
                      </div>
                    </div>
                    <div className="w-auto">
                      <span className="text-sm text-gray-500 font-medium">
                        Jul 14, 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

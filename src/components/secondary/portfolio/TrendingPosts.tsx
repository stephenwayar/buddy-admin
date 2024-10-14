import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const posts = [
  {
    title: '10 Tips to Improve Your Social Media Strategy',
    content: "Social media is the key to growing your business, but how can you stand out?",
    likes: '300',
    comments: '45',
    share: '120'
  },
  {
    title: 'How to Build a Strong Personal Brand in 2024',
    content: "Personal branding is essential. Learn how to create a brand that lasts.",
    likes: '150',
    comments: '25',
    share: '67'
  },
  {
    title: 'Understanding the Power of Influencer Partnerships',
    content: "Influencers can boost your reach. Here's why partnerships work.",
    likes: '512',
    comments: '78',
    share: '300'
  },
  {
    title: '7 Creative Marketing Campaign Ideas for 2024',
    content: "Want to go viral? These 7 marketing ideas will help you create buzz in 2024.",
    likes: '421',
    comments: '30',
    share: '214'
  },
];

export default function TrendingPosts() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      // Scroll to the end of the container
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: 'smooth',
      });

      // After 6 seconds, scroll back to the beginning
      const timer = setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            left: 0, // Scroll back to the beginning
            behavior: 'smooth',
          });
        }
      }, 6000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, []);

  return (
    <div className="bg-white rounded-[12px] space-y-4 p-5">
      <h1 className="text-[#3B3B45] truncate font-bold text-xl">
        Trending Posts
      </h1>

      <div ref={scrollRef} className="flex w-full scroll-smooth overflow-x-auto space-x-4 items-center no-scrollbar">
        {posts.map((post, i) => (
          <Post
            key={i}
            share={post.share}
            title={post.title}
            likes={post.likes}
            content={post.content}
            comments={post.comments}
          />
        ))}
      </div>
    </div>
  );
}

interface PostProps {
  title: string;
  content: string;
  likes: string;
  comments: string;
  share: string;
}

const Post = ({ title, content, likes, comments, share }: PostProps) => {
  return (
    <div className="min-w-[24rem] h-fit rounded-[16px]">
      <Link href={`/dashboard/my-portfolio/#${title.split(' ').join('-').toLowerCase()}`}>
        <div className="border-[#F1F1F1] border-2 h-[10rem] p-4 rounded-[16px]">
          <div className="overflow-hidden flex flex-col h-full justify-between">
            <div>
              <h1 className="text-[#3B3B45] truncate font-bold text-lg">
                {title}
              </h1>
            </div>

            <div>
              <h3
                className="text-[#818187] font-light overflow-hidden text-ellipsis"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  lineClamp: 2
                }}
              >
                {content}
              </h3>
            </div>

            <div className="flex space-x-3 items-center">
              <Badge
                count={likes}
                type='like'
              />
              <Badge
                count={comments}
                type='comment'
              />
              <Badge
                count={share}
                type='share'
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

interface BadgeProps {
  count: string;
  type: 'like' | 'comment' | 'share'
}

const Badge = ({ count, type }: BadgeProps) => {
  const icon = () => {
    switch (type) {
      case 'comment':
        return 'ic:sharp-message';
      case 'like':
        return 'fluent-emoji-flat:red-heart';
      case 'share':
        return 'akar-icons:arrow-forward-thick-fill';
      default:
        return 'akar-icons:arrow-forward-thick-fill';
    }
  };

  return (
    <div className="rounded-full py-1 px-3 space-x-1 bg-[#F6F6F6] flex items-center">
      <div>
        <Icon
          width="17"
          height="17"
          color={type === 'comment' ? '#FF8600' : '#F03800'}
          icon={icon()}
        />
      </div>

      <div>
        <h3 className="text-sm text-[#3B3B45] font-semibold">
          {count}
        </h3>
      </div>
    </div>
  )
}
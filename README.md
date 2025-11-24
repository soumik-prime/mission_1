# Blog: 01
## TypeScript-এ Interfaces এবং Types এর মধ্যে পার্থক্য

TypeScript-এ কোন ডাটা কি ধরণের বা তার গঠন ব্যাখ্যা করার জন্য interface এবং type ব্যবহার করা হয়। Interface এবং Type এর মাধ্যমে কম্পাইল টাইম এ ডাটা এর ধরণ বা গঠন ব্যাখ্যা করা হয় বলে বলে রানটাইম এ বাগ তৈরি করতে পারে এমন অনেক সমস্যা কম্পাইল টাইম এ রিসলভ করা সম্ভব হয়, যার ফলে সিস্টেম ক্রাশ সম্ভাবনা অনেক অংশে কমে যায়।

### Interfaces (`interface`)
TypeScript-এ অবজেক্ট এর গঠন নির্ধারণ করার জন্য `interface` কিওয়ার্ড ব্যবহার করার হয়। অবজেক্ট এ কত সংখ্যক মেম্বার/মেথড থাকবে তা interface এর মধ্যে আগে নির্ধারণ করা হয়।
```
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
```

### Types (`type`)
TypeScript-এ ডাটা কি ধরণের তা ব্যাখ্যা করার জন্য `type` কিওয়ার্ড ব্যবহার করার হয়ে থাকে। ডাটা বিভিন্ন ধরণের হতে পারে, যেমন: সংখ্যা, শব্দ, এরে ইত্যাদি।
```
type Name = string;
type Price = number;
type isActive = boolean;
```

### Interfaces এবং Types এর মধ্যে প্রধান পার্থক্য
- Interfaces কেবল মাত্র অবজেক্ট ডিফাইন এর ব্যবহার করা হয়। কিন্তু Type কোনো ডাটা কি ধরণের তা ডিফাইন এর জন্য ব্যবহার করা হয়। Type এর মাধ্যমে অবজেক্টও ডিফাইন করা সম্ভব।
- Interface একাধিক বার ডিফাইন করা যায়, TypeScript সেগুলোকে marge করে। কিন্তু Type একাধিক বার ডিফাইন করলে error দেয়।
- Type দিয়ে union, intersection সহ আরও অনেক জটিল টাইপ ম্যাপিং এর কাজ করার যায়। কিন্তু interface এর মাধ্যমে তা করা যায় না।



# Blog: 02
## TypeScript-এ Union এবং Intersection টাইপ এর উদাহরণ 

আমরা প্রতিনিয়ত যখন বিভিন্ন ধরণের ডাটা ব্যবহার করি তখন মাঝে মাঝে এমন পরিস্থিতি তৈরি হয় যখন ডাটাটি বাক্য হতে পারে আবার সংখ্যাও হতে পারে তখন Union টাইপ ব্যবহার করা হয়। আবার কখনও কখনও দুইটি ধরণের ডাটা একসাথে যুক্ত হয়ে নতুন স্ট্রাকচার তৈরি করে, সে ক্ষেত্রে Intersection টাইপ ব্যবহৃত হয়। 

### Union টাইপ (`|`)
এক্ষেত্রে ভেরিয়েবল একাধিক টাইপের যেকোনো একটি হতে পারে।
```
let id : string | number;
id = 4353;
id = 'PH06';
```

### Intersection টাইপ (`&`)
এক্ষেত্রে একাধিক টাইপ একত্রে মিশে নতুন টাইপ তৈরি করে।
```
type User = {
    name: string
};
type Admin = {
    role: string
};
type AdminUser = User & Admin;

const user : AdminUser = {
    name: "Soumik",
    role: "Administrator",
};
```
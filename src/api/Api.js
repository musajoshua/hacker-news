const topStories = "https://hacker-news.firebaseio.com/v0/topstories.json";
const newsItems = "https://hacker-news.firebaseio.com/v0/item/";

const fetchNews = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
    });
};

const showNews = async() => {
    try {
        const response = await fetchNews(topStories);
        // console.log(response);
        return response;
    } catch (err) {
        console.log(err);
    }
};

const showNewsItem = async(res) => {
    try {
        const newsData = await fetchNews(`${newsItems}${res}.json`);
        return newsData;
        // console.log(newsData);
        // console.log(items);
    } catch (err) {
        console.log(err);
    }
};

export { showNews, showNewsItem };
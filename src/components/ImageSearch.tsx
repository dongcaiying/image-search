import { Input, List, Image } from "antd";
import React, { useState, useEffect } from "react";
import { axiosInstance as Http } from "utils/http";

const { Search } = Input;
interface IList {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}
const ImageSearch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IList[]>();
  const [error, setError] = useState(null);

  const onSearch = async (value: string) => {
    await Http.get(
      `/services/rest/?method=flickr.photos.search&api_key=3e7cc266ae2b0e0d78e279ce8e361736&format=json&nojsoncallback=1&safe_search=1&text=${value}`
    )
      .then((res: any) => {
        setLoading(false);
        setData(res);
      })
      .catch((err: any) => {
        setLoading(false);
        setError(err);
      });
    console.log("search:", value);
  };
  return (
    <div
      style={{
        margin: 20,
      }}
    >
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{
          width: 300,
        }}
      />
      <List
        bordered
        split
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            style={{
              margin: 20,
            }}
          >
            <Image
              src={`http://farm${item.farm}.static.flickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
              width={200}
              height={200}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ImageSearch;

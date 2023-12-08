import axios from "axios";

export function chatApi(setCommenets?: any) {
  const insertCommontApi = (data: any) => {
    axios
      .post("/api/chat/insertComment", JSON.stringify(data))
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        if (result.statusCode == 200) {
          alert("추가되었습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCommentApi = async () => {
    await axios
      .get("/api/chat/getComment")
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        const resultList = data.result;
        if (result.statusCode == 200) {
          setCommenets({
            array: resultList,
            status: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const delCommentApi = (id: string) => {
    axios
      .delete("/api/chat/delComment", { data: { id: id } })
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        if (result.statusCode == 200) {
          alert("삭제되었습니다.");
          getCommentApi();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCommentApi = (id: string, comment: string) => {
    axios
      .patch("/api/chat/updateComment", { id: id, comment: comment })
      .then((res) => res.data)
      .then((data) => {
        const result = data.res;
        if (result.statusCode == 200) {
          alert("수정되었습니다.");
          getCommentApi();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { insertCommontApi, getCommentApi, delCommentApi, updateCommentApi };
}

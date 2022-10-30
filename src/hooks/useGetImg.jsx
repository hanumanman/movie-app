

useEffect(() => {
  const getMovies = async () => {
    try {
      const res = await apiService.get(
        `/movie/663712/images?api_key=c3d0338c685314581c50db43fa93a914`
      );
      let imgFiles;
      imgFiles = res.data.backdrops;
      setImg(`https://image.tmdb.org/t/p/w500${imgFiles[0].file_path}`);
    } catch (error) {
      console.log(error);
    }
  };
  getMovies();
}, []);

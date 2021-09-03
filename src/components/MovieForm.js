import React, {useState} from 'react';

const MovieForm = ({addMovie}) => {
  
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [TitleError, setTitleError] = useState('');
  const [YearError, setYearError] = useState('');

  const resetForm = () => {
    setMovieTitle('');
    setMovieYear('');
  };

  const resetErrors = () => {
    setTitleError('');
    setYearError('');
  };
  
  const validateForm = () => {
    resetErrors();
    let validated = true;
    if(!movieTitle) {
      setTitleError('영화제목을 입력하세요');
      validated= false;
    }
    if (!movieYear) {
      setYearError('개봉년도를 입력하세요');
      validated= false;
    }
    return validated;
  };

  const onSubmit = (event)=> {
    event.preventDefault();
    
    if (validateForm()) {
      addMovie({
        id: Date.now(),
        title: movieTitle,
        year: movieYear,
      });
      resetErrors();
      resetForm();
    }
  };
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={movieTitle}
        placeholder="영화제목"
        onChange= {e=> setMovieTitle(e.target.value)}
      /><br/>
      <div style={{color: 'red'}}>{TitleError}</div>
      <input
        type='number'
        value={movieYear}
        placeholder="개봉년도"
        onChange= {e=> setMovieYear(e.target.value)}
      /><br/>
      <div style={{color: 'red'}}>{YearError}</div>
      <button type="submit">영화추가</button>
    </form>
    );
};

export default MovieForm;
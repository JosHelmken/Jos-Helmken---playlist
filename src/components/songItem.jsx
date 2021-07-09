import React from 'react';
import { FaYoutube, FaTrashAlt } from 'react-icons/fa';
import { deleteSong } from '../redux/musicSlice';
import { useDispatch } from 'react-redux';

const SongItem = ({id, rating, title, artist, youtube}) => {
	const dispatch = useDispatch();

	const handleDeleteSong = () => {
		dispatch(deleteSong({id}));
	};


	return (
		<li className='songlistwrapper' id={id}>
			<div className='position'>{rating}</div>
			<div className='title'>{title}</div>
			<div className='artist'>{artist}</div>
			<div className='youtube'>
        {youtube ? <a href={youtube} target='_blank' className='youtube-btn'> 
					<FaYoutube />
				</a> : ''}
			</div>
			<div className='delete'>
				<FaTrashAlt onClick={handleDeleteSong} />
			</div>
		</li>
	);
};

export default SongItem;

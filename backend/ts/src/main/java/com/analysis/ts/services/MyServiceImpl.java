package com.analysis.ts.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.analysis.ts.dao.ViewDao;
import com.analysis.ts.entity.View;

@Service
public class MyServiceImpl implements MyService {
	
	@Autowired
	private ViewDao viewDao;

	@Override
	public List<View> getViews() {
		// TODO Auto-generated method stub
		return viewDao.findAll();
	}

	@Override
	public View addView(View view) {
		// TODO Auto-generated method stub
		viewDao.save(view);
		return view;
	}

	@Override
	public View deleteView(long id) {
		// TODO Auto-generated method stub
		View view = viewDao.getOne(id);
		viewDao.delete(view);
		return null;
	}

	@Override
	public Optional<View> getViewById(long id) {
		// TODO Auto-generated method stub
		return viewDao.findById(id);
	}
	
	

}

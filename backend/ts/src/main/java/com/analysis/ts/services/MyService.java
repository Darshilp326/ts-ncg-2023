package com.analysis.ts.services;

import java.util.List;
import java.util.Optional;

import com.analysis.ts.entity.View;


public interface MyService {
	public List<View> getViews();
	public View addView(View view);
	public View deleteView(long id);
	public Optional<View> getViewById(long id);
}

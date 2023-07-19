package com.analysis.ts.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.analysis.ts.entity.View;

@Repository
public interface ViewDao extends JpaRepository<View, Long> {}

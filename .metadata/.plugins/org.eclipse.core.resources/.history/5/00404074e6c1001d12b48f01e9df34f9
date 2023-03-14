package com.fitbuddy.Dao;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.fitbuddy.Model.DailyActivityId;
import com.fitbuddy.Model.DailyActivity;

@Repository
public interface DailyActivityDao extends JpaRepository<DailyActivity, DailyActivityId> {

    @Query("SELECT d FROM DailyActivity d WHERE d.id = :id ORDER BY d.date DESC")
    List<DailyActivity> findTop5ByIdOrderByDateDesc(@Param("id") int id, Pageable pageable);

}


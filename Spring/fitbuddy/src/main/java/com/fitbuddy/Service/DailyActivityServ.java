package com.fitbuddy.Service;

import java.util.List;


import com.fitbuddy.Model.DailyActivity;

public interface DailyActivityServ {

	     List<DailyActivity> findTop5ByIdOrderByDateDesc(int id);
	     void add(DailyActivity da);

}

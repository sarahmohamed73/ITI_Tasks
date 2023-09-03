-- Prevent Insert New Course With Name Length Greater Than 20 Chars
CREATE OR REPLACE FUNCTION verify_length()
RETURNS TRIGGER AS $$
BEGIN
  IF LENGTH(NEW.name) > 20 THEN
    RAISE NOTICE 'Course Name Must Be Less Than or Equel 20 Character';
    RETURN NULL;
  ELSE
    RETURN NEW;
  END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_length BEFORE INSERT ON course
FOR EACH ROW EXECUTE PROCEDURE verify_length();

-- Prevent User To Insert Or Update Exam With Score Greater Than 100 Or Less Than Zero
CREATE OR REPLACE FUNCTION verify_score()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.examscore > 100 OR NEW.examscore < 0 THEN
    RAISE NOTICE 'Exam Score Can Not Be More Than 100 Or Less Than 0';
    RETURN NULL;
  ELSE
    RETURN NEW;
  END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_score BEFORE INSERT OR UPDATE ON student_course
FOR EACH ROW EXECUTE PROCEDURE verify_score();

-- Prevent Any User To Do Any Thing To All Tables After 7:00 PM
CREATE OR REPLACE FUNCTION verify_time()
RETURNS TRIGGER AS $$
BEGIN
  IF DATE_PART('hour', CURRENT_TIME) > 19 THEN
    RAISE NOTICE 'Sorry I Can not Do Thing After 7:00 PM';
    RETURN NULL;
  ELSE
    RETURN NEW;
  END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_time_on_student 
BEFORE INSERT OR UPDATE OR DELETE 
ON student
FOR EACH ROW EXECUTE PROCEDURE verify_time();

CREATE TRIGGER check_time_on_course 
BEFORE INSERT OR UPDATE OR DELETE 
ON course
FOR EACH ROW EXECUTE PROCEDURE verify_time();

CREATE TRIGGER check_time_on_track 
BEFORE INSERT OR UPDATE OR DELETE 
ON track
FOR EACH ROW EXECUTE PROCEDURE verify_time();

CREATE TRIGGER check_time_on_studentPhone 
BEFORE INSERT OR UPDATE OR DELETE 
ON student_phone
FOR EACH ROW EXECUTE PROCEDURE verify_time();

CREATE TRIGGER check_time_on_studentCourse 
BEFORE INSERT OR UPDATE OR DELETE 
ON student_course
FOR EACH ROW EXECUTE PROCEDURE verify_time();

CREATE TRIGGER check_time_on_trackCourse 
BEFORE INSERT OR UPDATE OR DELETE 
ON track_course
FOR EACH ROW EXECUTE PROCEDURE verify_time();
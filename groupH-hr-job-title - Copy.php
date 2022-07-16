<!DOCTYPE html>
<html>
<head>
	<title>MySQL Query</title>
	<link rel="stylesheet" type="text/css" href="groupH-hr-style.css">
</head>
 
<body>

<?php


$server = "localhost";
$user = "root";
$pw = "";
$db = "hr";

$jobTitle = $_POST['jobTitle'];


$connect= mysqli_connect($server, $user, $pw, $db);


if(!$connect)
	{
die("Error: Cannot connect to database $db on server $server 
using username $user (".mysqli_connect_errno(). ",
".mysqli_connect_error().")");
	}

$userQuery = "SELECT employee_id, first_name, last_name, email, phone_number, hire_date, jobs.job_id, job_title, salary FROM employees INNER JOIN jobs ON employees.job_id = jobs.job_id WHERE job_title = '$jobTitle'";

$result = mysqli_query($connect, $userQuery);

if (!$result) {
	die("Could not successfully run query ($userQuery) from $db: " .
	mysqli_error($connect) );
}

if (mysqli_num_rows($result) == 0)
  {
	  print("No records found with query $userQuery");
  }

else 
  {
	  print("<h1>$jobTitle </h1>");
	  print("<table border = \"1\">");
	  
	  print("<tr><th> Employee ID </th><th> First Name </th><th> Last Name </th><th> Email </th><th> Phone Number </th><th> Hire Date </th><th> Job Code </th><th> Job Title </th><th> Salary </th></tr>");
	  
	  $cnt = 0;
	  $sum = 0;
	  while ($row = mysqli_fetch_assoc($result))
	    
		
		{
			$sum = $sum + .$row['$salary']
			$cnt = $cnt + 1
		    print("<tr><<td>".$row['employee_id'].  "</td><<td>".$row['first_name'].  "</td><td>".$row['last_name']. "</td><td>".$row['email']. "</td><td>".$row['phone_number']. "</td><td>".$row['hire_date']. "</td><td>".$row['job_id']. "</td>
			<td>".$row['job_title']. "</td><td>".$row['salary']. "</td></tr>");
	    }
		$avg = $sum / $cnt;
	   print("</table>");
	   print("<p>Average Salary Wage: $avg</p>");
	   
  }

mysqli_close($connect);
?>

</body>
</html>
	

function fibonacci(limit){
			var sequence = [0,1];		

		    if(limit == 0) sequence = [0];
		    if(limit > 1) sequence = [0, 1];
		    for(i=2; i<limit; i++) sequence.push(sequence[i-1] + sequence[i-2]);  

		    return sequence;
		}
		
		// Test
		serie = fibonacci(10);
		for(i=0; i < serie.length; i++){
			document.write(serie[i]+"<br/>");	
		}

var algos = {
	"BubbleSort" : {
		name : "Bubble Sort",
		video : {
			url : "https://www.youtube.com/embed/6Gv8vg0kcHc",
			credit : "https://www.youtube.com/c/HackerrankOfficial/featured"
		},
		info : {
			about : "A very simple comparison based sorting algorithm used for education.",
			properties : {
				inPlace : "✓",
				stable : "✓",
				best : "n",
				average : "½ n&sup2;",
				worst : "½ n&sup2;",
				space : "1"
			},
			use : "Has very little real world usage, generally insertion sort should be used instead as it is faster in most cases. It does have uses in teaching algorithms as it is one of the most simple algorithms."
		}
	},
	"MergeSort" : {
		name : "Merge Sort",
		video : {
			url : "https://www.youtube.com/embed/KF2j-9iSf4Q",
			credit : "https://www.youtube.com/c/HackerrankOfficial/featured"
		},
		info : {
			about : "A general-purpose, divide and conquer, comparison-based sorting algorithm which uses two arrays to split and then merge the main array recursively.",
			properties : {
				inPlace : "X",
				stable : "✓",
				best : "½ n lg n",
				average : "n lg n",
				worst : "n lg n",
				space : "n"
			},
			use : "Has extensive real world use. Should be used when space is not an issue and in-place sorting is not required. It has guaranteed n log n perfomance which is one of the best of all of algorithms.",
			disclaimer : ""
		}
	},
	"QuickSort" : {
		name : "Quick Sort",
		video : {
			url : "https://www.youtube.com/embed/SLauY6PpjW4",
			credit : "https://www.youtube.com/c/HackerrankOfficial/featured"
		},
		info : {
			about : "A recursive divide and conquer algorithm which works by selecting a pivot and partitioning the array into two subarrays and then comparing and swapping them.",
			properties : {
				inPlace : "✓",
				stable : "X",
				best : "n lg n",
				average : "2 n ln n",
				worst : "½ n 2",
				space : "log n*"

			},
			use : "Does not have guaranteed logarithmic performance but in real world use it is the fastest algorithm. Should not be used if stablity or space is an issue.",
			disclaimer : "*Depends on implementation, more technical versions can be n (in-place partitioning)"
		}
	},
	"HeapSort" : {
		name : "Heap Sort",
		video : {
			url : "https://www.youtube.com/embed/2DmK_H7IdTo",
			credit : "https://www.youtube.com/c/MichaelSambol/featured"
		},
		info : {
			about : "A comparison based very simple sorting algorithm.",
			pros : " - Very simple to implement and understand. \r\n - For already sorted lists it will only make O(n)",
			cons: "Where n is the number of elements in the list. Bubble sort will compare n² item both in an average case and also in worst case."
		}
	},
	"SelectionSort" : {
		name : "Selection Sort",
		video : {
			url : "https://www.youtube.com/embed/g-PGLbMth_g",
			credit : "https://www.youtube.com/c/MichaelSambol/featured"
		},
		info : {
			about : "A comparison based very simple sorting algorithm.",
			pros : " - Very simple to implement and understand. \r\n - For already sorted lists it will only make O(n)",
			cons: "Where n is the number of elements in the list. Bubble sort will compare n² item both in an average case and also in worst case."
		}
	},
	"InsertionSort" : {
		name : "Insertion Sort",
		video : {
			url : "https://www.youtube.com/embed/JU767SDMDvA",
			credit : "https://www.youtube.com/c/MichaelSambol/featured"
		},
		info : {
			about : "A comparison based very simple sorting algorithm.",
			pros : " - Very simple to implement and understand. \r\n - For already sorted lists it will only make O(n)",
			cons: "Where n is the number of elements in the list. Bubble sort will compare n² item both in an average case and also in worst case."
		}
	},
	"ShellSort" : {
		name : "Shell Sort",
		video : {
			url : "https://www.youtube.com/embed/SHcPqUe2GZM",
			credit : "https://www.youtube.com/c/GeeksforGeeksVideos/featured"
		},
		info : {
			about : "A comparison based very simple sorting algorithm.",
			pros : " - Very simple to implement and understand. \r\n - For already sorted lists it will only make O(n)",
			cons: "Where n is the number of elements in the list. Bubble sort will compare n² item both in an average case and also in worst case."
		}
	},
	"CountSort" : {
		name : "Count Sort",
		video : {
			url : "https://www.youtube.com/embed/7zuGmKfUt7s",
			credit : "https://www.youtube.com/c/GeeksforGeeksVideos/featured"
		},
		info : {
			about : "A comparison based very simple sorting algorithm.",
			pros : " - Very simple to implement and understand. \r\n - For already sorted lists it will only make O(n)",
			cons: "Where n is the number of elements in the list. Bubble sort will compare n² item both in an average case and also in worst case."
		}
	}
}

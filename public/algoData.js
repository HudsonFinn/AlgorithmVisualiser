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
			about : "A sorting algorithms which uses the heap data-structure to sort a list.",
			properties : {
				inPlace : "✓",
				stable : "X",
				best : "n*",
				average : "2 n ln n",
				worst : "2 n lg n",
				space : "1"
			},
			use : "Heap sort is the basis for the proprity queue which is used in many algorithms such as djikstras and others.",
			disclaimer : "* n lg n if all keys are distinct"
		}
	},
	"SelectionSort" : {
		name : "Selection Sort",
		video : {
			url : "https://www.youtube.com/embed/g-PGLbMth_g",
			credit : "https://www.youtube.com/c/MichaelSambol/featured"
		},
		info : {
			about : "A comparison based sorting algorithm which finds the highest/lowest value in the list and moves it to the end until the list is sorted.",
			properties : {
				inPlace : "✓",
				stable : "X",
				best : "½ n&sup2;",
				average : "½ n&sup2;",
				worst : "½ n&sup2;",
				space : "1"
			},
			use : "Selection sort only ever does a maximum of n swaps because of this it uses very little temporary memory space so if that is limited it is useful. However, it has best case quadratic time complexity so it is slower than most other algorithms.",
			disclaimer : ""
		}
	},
	"InsertionSort" : {
		name : "Insertion Sort",
		video : {
			url : "https://www.youtube.com/embed/JU767SDMDvA",
			credit : "https://www.youtube.com/c/MichaelSambol/featured"
		},
		info : {
			about : "A comparison based sorting algorithm which selects values and places them in the correct place in a 'sorted' part of the list.",
			properties : {
				inPlace : "✓",
				stable : "✓",
				best : "n",
				average : "¼ n 2",
				worst : "½ n&sup2;",
				space : "1"
			},
			use : "For larger lists insertion sort has very little use. However it is very fast for partially sorted lists so is often used in combination with merge or quicksort to sort smaller partially sorted parts of lists. It is also one of the fastest algorithms which is both in-place and stable.",
			disclaimer : ""
		}
	},
	"ShellSort" : {
		name : "Shell Sort",
		video : {
			url : "https://www.youtube.com/embed/SHcPqUe2GZM",
			credit : "https://www.youtube.com/c/GeeksforGeeksVideos/featured"
		},
		info : {
			about : "An in-place comparison sort which involves swapping far away pairs of elements and gradually reducing the the space between the elements with each pass.",
			properties : {
				inPlace : "✓",
				stable : "X",
				best : "n log<sub>3</sub> n",
				average : "n lg n",
				worst : "c n <sup>3/2</sup>",
				space : "1"
			},
			use : "Has great uses in combination with with insertion sort. You use shell sort first then insertion sort to sort the partially sorted list. It also recurses very few times compared to other algorithms so if the call stack is limited it is also useful.",
			disclaimer : ""
		}
	},
	"CountSort" : {
		name : "Count Sort",
		video : {
			url : "https://www.youtube.com/embed/7zuGmKfUt7s",
			credit : "https://www.youtube.com/c/GeeksforGeeksVideos/featured"
		},
		info : {
			about : "Count sort works by counting the number of objects with distinct key values. It then calculates the positions of these objects and places them back into the array. k = number of distinct keys. \r\n",
			properties : {
				inPlace : "✓",
				stable : "X",
				best : "n + k",
				average : "n + k",
				worst : "n + k",
				space : "n + k *"
			},
			use : "Has great uses in combination with with insertion sort. You use shell sort first then insertion sort to sort the partially sorted list. It also recurses very few times compared to other algorithms so if the call stack is limited it is also useful. However there are many unique possible values then the space and time requirements become very large",
			disclaimer : " *Depending on implementation can be k or n + k"
		}
	}
}

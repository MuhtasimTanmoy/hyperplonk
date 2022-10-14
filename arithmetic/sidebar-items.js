window.SIDEBAR_ITEMS = {"enum":[["ArithErrors","A `enum` specifying the possible failure modes of the arithmetics."]],"fn":[["bit_decompose","Decompose an integer into a binary vector in little endian."],["build_eq_x_r","This function build the eq(x, r) polynomial for any given r."],["build_eq_x_r_vec","This function build the eq(x, r) polynomial for any given r, and output the evaluation of eq(x, r) in its vector form."],["build_l","Given a list of points, build `l(points)` which is a list of univariate polynomials that goes through the points; extend the dimension of the points by `log(points.len())` if `with_suffix` is set."],["evaluate_no_par",""],["evaluate_opt",""],["fix_last_variables",""],["fix_last_variables_no_par",""],["fix_variables",""],["gen_eval_point","given the evaluation input `point` of the `index`-th polynomial, obtain the evaluation point in the merged polynomial"],["get_batched_nv","Return the number of variables that one need for an MLE to batch the list of MLEs"],["get_index",""],["get_uni_domain","get the domain for the univariate polynomial"],["identity_permutation_mle","An MLE that represent an identity permutation: `f(index) \\mapto index`"],["merge_polynomials","merge a set of polynomials. Returns an error if the polynomials do not share a same number of nvs."],["random_mle_list","Sample a random list of multilinear polynomials. Returns"],["random_permutation_mle","An MLE that represent a random permutation"],["random_zero_mle_list",""]],"struct":[["DenseMultilinearExtension","Stores a multilinear polynomial in dense evaluation form."],["VPAuxInfo","Auxiliary information about the multilinear polynomial"],["VirtualPolynomial","A virtual polynomial is a sum of products of multilinear polynomials; where the multilinear polynomials are stored via their multilinear extensions:  `(coefficient, DenseMultilinearExtension)`"]]};